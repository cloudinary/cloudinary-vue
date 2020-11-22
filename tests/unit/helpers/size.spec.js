import { watchElementSize } from '../../../src/helpers/size'

describe('watchElementSize', () => {
 const nativeResizeObserver = global.ResizeObserver;
 afterEach(() => {
   jest.clearAllMocks()
   window.ResizeObserver = nativeResizeObserver
 })
 it(' there is no resizeObserver', () => {
   window.ResizeObserver = null
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

 
})