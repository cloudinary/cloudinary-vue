import { watchElementVisibility, noop } from '../../../src/helpers/visibility'
describe('watchElementVisibility', () => {
 const nativeIntersectionObserver = window.IntersectionObserver;

 afterEach(() => {
   jest.clearAllMocks()
   window.IntersectionObserver = nativeIntersectionObserver
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