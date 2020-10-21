import { evalBreakpoints } from '../../src/helpers/evalBreakpoints'
import { watchElementSize } from '../../src/helpers/size'
import { watchElementVisibility, noop } from '../../src/helpers/visibility'

describe('evalBreakpoints', () => {
  it ('pass a function', () => {
    const mockParam = jest.fn()

    evalBreakpoints(mockParam)

    expect(mockParam).toBeCalled()
  })

  it('pass an object', () => {
    const mockParam = {}
    const JSONSpy = jest.spyOn(global.JSON, 'parse').mockImplementation(() => {})

    expect(evalBreakpoints(mockParam)).toEqual({})
    expect(JSONSpy).not.toBeCalled()
  })

  it('pass a string', () => {
    const mockParam = `{ test: 'hello' }`
    const JSONSpy = jest.spyOn(global.JSON, 'parse').mockImplementation(() => {})
    evalBreakpoints(mockParam)
    expect(JSONSpy).toBeCalledWith(`[{ test: 'hello' }]`)
  })
}) 

describe('watchElementSize', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it(' there is no resizeObserver', () => {
    window.ResizeObserver = null
    // const resizeObserverSpy = jest.spyOn(global, 'ResizeObserver').mockImplementation(null)
    const addEventListenerSpy = jest.spyOn(global, 'addEventListener').mockImplementation(null)
    const removeEventListenerSpy = jest.spyOn(global, 'removeEventListener').mockImplementation(null)

    const callback = watchElementSize({
      getBoundingClientRect: jest.fn(() => ({ width: 1, height: 1 }))
    })

    callback()
    callback()

    expect(addEventListenerSpy).toBeCalled()
    expect(removeEventListenerSpy).toBeCalledTimes(1)

  })

  it(' there is resizeObserver', () => {
    const observeSpy = jest.fn()
    const disconnectSpy = jest.fn()
    window.ResizeObserver = class ResizeObserverMock {
      observe() {
        return observeSpy()
      }
      disconnect() {
        return disconnectSpy()
      }
    }

    const addEventListenerSpy = jest.spyOn(global, 'addEventListener').mockImplementation(null)
    const removeEventListenerSpy = jest.spyOn(global, 'removeEventListener').mockImplementation(null)

    const callback = watchElementSize({
      getBoundingClientRect: jest.fn(() => ({ width: 1, height: 1 }))
    })

    callback()
    callback()

    expect(observeSpy).toBeCalled()
    expect(disconnectSpy).toBeCalledTimes(1)
    expect(addEventListenerSpy).not.toBeCalled()
    expect(removeEventListenerSpy).not.toBeCalled()
  })

  it('debounce is not called on empty entries', () => {
    const observeSpy = jest.fn()
    const disconnectSpy = jest.fn()
    const debounceSpy = jest.fn()
    window.debounce = debounceSpy
    window.ResizeObserver = class ResizeObserverMock {
      constructor(cb) {
        this.cb = cb
      }
      observe() {
        this.cb([])
        return observeSpy()
      }
      disconnect() {
        return disconnectSpy()
      }
    }
    const callback = watchElementSize({
      getBoundingClientRect: jest.fn(() => ({ width: 1, height: 1 }))
    })

    callback()
    callback()

    expect(observeSpy).toBeCalled()
    expect(debounceSpy).not.toBeCalled()
  })

  describe('watchElementVisibility', () => {
    afterEach(() => {
      jest.clearAllMocks()
    })
    it(' there is no IntersectionObserver', () => {
      window.IntersectionObserver = null

      const listenerMock = jest.fn()
      
      const callback = watchElementVisibility({}, listenerMock)
  
      expect(listenerMock).toBeCalledWith(true)
      expect(callback).toEqual(noop)
  
    })
  
    it(' there is IntersectionObserver', () => {
      const observeSpy = jest.fn()
      const disconnectSpy = jest.fn()
      const listenerMock = jest.fn()
      window.IntersectionObserver = class IntersectionObserverMock {
        observe() {
          return observeSpy()
        }
        disconnect() {
          return disconnectSpy()
        }
      }
  
      const callback = watchElementVisibility({}, listenerMock)
  
      callback()
  
      expect(observeSpy).toBeCalled()
      expect(disconnectSpy).toBeCalled()
      expect(listenerMock).not.toBeCalled()
    })
  
    it('listerner is called if target met', () => {
      const observeSpy = jest.fn()
      const disconnectSpy = jest.fn()
      const listenerMock = jest.fn()
      const target = 'hello'
      window.IntersectionObserver = class IntersectionObserverMock {
        constructor(cb) {
          this.cb = cb
        }
        observe() {
          this.cb([{
            target,
            isIntersecting: false
          }])
          return observeSpy()
        }
        disconnect() {
          return disconnectSpy()
        }
      }
      const callback = watchElementVisibility(target, listenerMock)
  
  
      expect(observeSpy).toBeCalled()
      expect(listenerMock).toBeCalled()

      callback()
      expect(disconnectSpy).toBeCalled()
    })

    it('listerner is not called if target not met', () => {
      const observeSpy = jest.fn()
      const disconnectSpy = jest.fn()
      const listenerMock = jest.fn()
      const target = 'hello'
      window.IntersectionObserver = class IntersectionObserverMock {
        constructor(cb) {
          this.cb = cb
        }
        observe() {
          this.cb([{
            target: 'yo',
            isIntersecting: false
          }])
          return observeSpy()
        }
        disconnect() {
          return disconnectSpy()
        }
      }
      
      watchElementVisibility(target, listenerMock)
  
  
      expect(listenerMock).not.toBeCalled()
    })
  })
})