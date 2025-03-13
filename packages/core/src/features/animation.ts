import type { Properties } from 'csstype'

export interface AnimationKeyframes {
  [key: string]: {
    [key: string]: string | number
  }
}

export interface AnimationConfig {
  name: string
  duration?: string
  timingFunction?: string
  delay?: string
  iterationCount?: string | number
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both'
  playState?: 'running' | 'paused'
}

export interface AnimationPresets {
  [key: string]: {
    keyframes: AnimationKeyframes
    config?: Partial<AnimationConfig>
  }
}

const defaultPresets: AnimationPresets = {
  fadeIn: {
    keyframes: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    config: {
      duration: '300ms',
      timingFunction: 'ease-in'
    }
  },
  fadeOut: {
    keyframes: {
      from: {
        opacity: 1
      },
      to: {
        opacity: 0
      }
    },
    config: {
      duration: '300ms',
      timingFunction: 'ease-out'
    }
  },
  slideIn: {
    keyframes: {
      from: {
        transform: 'translateY(20px)',
        opacity: 0
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1
      }
    },
    config: {
      duration: '400ms',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
}

export class AnimationManager {
  private presets: AnimationPresets

  constructor(customPresets: AnimationPresets = {}) {
    this.presets = { ...defaultPresets, ...customPresets }
  }

  private createKeyframesRule(name: string, keyframes: AnimationKeyframes): string {
    let cssString = `@keyframes ${name} {`

    Object.entries(keyframes).forEach(([selector, styles]) => {
      cssString += `${selector} {`
      Object.entries(styles).forEach(([prop, value]) => {
        cssString += `${prop}: ${value};`
      })
      cssString += '}'
    })

    cssString += '}'
    return cssString
  }

  private createAnimationConfig(config: AnimationConfig): string {
    const {
      name,
      duration = '300ms',
      timingFunction = 'ease',
      delay = '0s',
      iterationCount = '1',
      direction = 'normal',
      fillMode = 'none',
      playState = 'running'
    } = config

    return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
  }

  public createAnimation(name: string, config?: Partial<AnimationConfig>): string {
    const preset = this.presets[name]
    if (!preset) {
      throw new Error(`Animation preset "${name}" not found`)
    }

    const keyframesRule = this.createKeyframesRule(name, preset.keyframes)
    const animationConfig = this.createAnimationConfig({
      name,
      ...preset.config,
      ...config
    })

    return `
      ${keyframesRule}
      animation: ${animationConfig};
    `
  }

  public addPreset(name: string, preset: { keyframes: AnimationKeyframes; config?: Partial<AnimationConfig> }): void {
    this.presets[name] = preset
  }
}

// Example usage:
/*
const animations = new AnimationManager({
  customFade: {
    keyframes: {
      '0%': {
        opacity: '0',
        transform: 'scale(0.9)'
      },
      '100%': {
        opacity: '1',
        transform: 'scale(1)'
      }
    },
    config: {
      duration: '500ms',
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
})

const styles = animations.createAnimation('customFade', {
  delay: '100ms',
  fillMode: 'forwards'
})
*/ 