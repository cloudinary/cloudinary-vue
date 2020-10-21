import * as attributes from '../../../src/helpers/attributes'

/**
 * Configuration options accepted
 * cloudName
 * secure
 * privateCdn
 * apiKey
 * apiSecret
 * secureDistribution
 * cname
 */

describe('Attribute helpers', () => {
  it('normalizeConfiguration - should pass', () => {
    const config = {
      cloudName: 'abc',
      secure: true,
    }

    expect(attributes.normalizeConfiguration(config)).toEqual({
      cloud_name: 'abc',
      secure: true
    })
  })

  it('normalizeConfiguration - secure is a string', () => {
    const config = {
      secure: 'true'
    }

    expect(attributes.normalizeConfiguration(config)).toEqual({
      secure: true
    })
  })

  it('normalizeConfiguration - secure does not present', () => {
    const config = {
      cloudName: 'abc',
    }

    expect(attributes.normalizeConfiguration(config)).toEqual({
      cloud_name: 'abc'
    })
  })

  it('normalizeConfiguration - should not return non-existant config options', () => {
    const config = {
      publicId: 'abc',
      apiKey: 'a'
    }

    expect(attributes.normalizeConfiguration(config)).toEqual({
      api_key: 'a'
    })
  })

  it('normalizeConfiguration - should auto-keep the normalized option', () => {
    const config = {
      cloud_name: 'abc',
    }

    expect(attributes.normalizeConfiguration(config)).toEqual({
      cloud_name: 'abc'
    })
  })

  it('normalizeConfiguration - should return empty when no params', () => {
    expect(attributes.normalizeConfiguration()).toEqual({
    })
  })
}) 