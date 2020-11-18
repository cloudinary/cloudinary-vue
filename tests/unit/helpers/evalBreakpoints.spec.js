import { evalBreakpoints } from '../../../src/helpers/evalBreakpoints'

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
