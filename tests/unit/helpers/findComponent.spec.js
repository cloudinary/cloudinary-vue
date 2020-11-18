import { getCldPlaceholder } from '../../../src/helpers/findComponent'
import { COMPONENTS } from '../../../src/constants';

describe('getCldPlaceholder', () => {
  it('no children', () => {
    expect(getCldPlaceholder()).toEqual(undefined)
  })

  it('has children but no placeholder', () => {
    expect(getCldPlaceholder([{ componentOptions: {} }])).toEqual(undefined)
  })

  it('has placeholder', () => {
    const placeholder = { 
      componentOptions: {
        Ctor: {
          extendOptions: {
            name: COMPONENTS.CldPlaceholder
          }
        }
      },
      name: 'test' 
    }
    expect(getCldPlaceholder([placeholder, {
      componentOptions: {
        Ctor: {
          extendOptions: {
            name: COMPONENTS.CldImage
          }
        }
      },
    }])).toEqual(placeholder)
  })
})  