'use strict'

const SCREENS = [
  { name:'sm',  desc:'small',         value:'640px' },
  { name:'md',  desc:'medium',        value:'768px' },
  { name:'lg',  desc:'large',         value:'1024px' },
  { name:'xl',  desc:'extra large',   value:'1280px' },
  { name:'2xl', desc:'2 extra large', value:'1536px' }
]

const DEFAULT_SPACING_SCALE = [
  { name:'0',   value:'0px' },
  { name:'px',  value:'1px' },
  { name:'0.5', value:'0.125rem' },
  { name:'1',   value:'0.25rem' },
  { name:'1.5', value:'0.375rem' },
  { name:'2',   value:'0.5rem' },
  { name:'2.5', value:'0.625rem' },
  { name:'3',   value:'0.75rem' },
  { name:'3.5', value:'0.875rem' },
  { name:'4',   value:'1rem' },
  { name:'5',   value:'1.25rem' },
  { name:'6',   value:'1.5rem' },
  { name:'7',   value:'1.75rem' },
  { name:'8',   value:'2rem' },
  { name:'9',   value:'2.25rem' },
  { name:'10',  value:'2.5rem' },
  { name:'11',  value:'2.75rem' },
  { name:'12',  value:'3rem' },
  { name:'14',  value:'3.5rem' },
  { name:'16',  value:'4rem' },
  { name:'20',  value:'5rem' },
  { name:'24',  value:'6rem' },
  { name:'28',  value:'7rem' },
  { name:'32',  value:'8rem' },
  { name:'36',  value:'9rem' },
  { name:'40',  value:'10rem' },
  { name:'44',  value:'11rem' },
  { name:'48',  value:'12rem' },
  { name:'52',  value:'13rem' },
  { name:'56',  value:'14rem' },
  { name:'60',  value:'15rem' },
  { name:'64',  value:'16rem' },
  { name:'72',  value:'18rem' },
  { name:'80',  value:'20rem' },
  { name:'96',  value:'24rem' }
]

const CORE_DEFAULT_FRACTIONAL_SCALE = [
  { name:'1/2',  value:'50%' },
  { name:'1/3',  value:'33.333333%' },
  { name:'2/3',  value:'66.666667%' },
  { name:'1/4',  value:'25%' },
  { name:'2/4',  value:'50%' },
  { name:'3/4',  value:'75%' },
  { name:'full', value:'100%' }
]

const FIFTHS_FRACTIONAL_SCALE = [
  { name:'1/5', value:'20%' },
  { name:'2/5', value:'40%' },
  { name:'3/5', value:'60%' },
  { name:'4/5', value:'80%' }
]

const SIXTHS_FRACTIONAL_SCALE = [
  { name:'1/6', value:'16.666667%' },
  { name:'2/6', value:'33.333333%' },
  { name:'3/6', value:'50%' },
  { name:'4/6', value:'66.666667%' },
  { name:'5/6', value:'83.333333%' }
]

const TWELFTHS_FRACTIONAL_SCALE = [
  { name:'1/12',  value:'8.333333%' },
  { name:'2/12',  value:'16.666667%' },
  { name:'3/12',  value:'25%' },
  { name:'4/12',  value:'33.333333%' },
  { name:'5/12',  value:'41.666667%' },
  { name:'6/12',  value:'50%' },
  { name:'7/12',  value:'58.333333%' },
  { name:'8/12',  value:'66.666667%' },
  { name:'9/12',  value:'75%' },
  { name:'10/12', value:'83.333333%' },
  { name:'11/12', value:'91.666667%' }
]

const DEFAULT_OPACITY_SCALE = [
  { name:'0',   value:'0' },
  { name:'5',   value:'0.05' },
  { name:'10',  value:'0.1' },
  { name:'20',  value:'0.2' },
  { name:'25',  value:'0.25' },
  { name:'30',  value:'0.3' },
  { name:'40',  value:'0.4' },
  { name:'50',  value:'0.5' },
  { name:'60',  value:'0.6' },
  { name:'70',  value:'0.7' },
  { name:'75',  value:'0.75' },
  { name:'80',  value:'0.8' },
  { name:'90',  value:'0.9' },
  { name:'95',  value:'0.95' },
  { name:'100', value:'1' }
]

const MAX_WIDTH_SCALE = [
  { name:'0',          value:'0rem' },
  { name:'none',       value:'none' },
  { name:'xs',         value:'20rem' },
  { name:'sm',         value:'24rem' },
  { name:'md',         value:'28rem' },
  { name:'lg',         value:'32rem' },
  { name:'xl',         value:'36rem' },
  { name:'2xl',        value:'42rem' },
  { name:'3xl',        value:'48rem' },
  { name:'4xl',        value:'56rem' },
  { name:'5xl',        value:'64rem' },
  { name:'6xl',        value:'72rem' },
  { name:'7xl',        value:'80rem' },
  { name:'full',       value:'100%' },
  { name:'min',        value:'min-content' },
  { name:'max',        value:'max-content' },
  { name:'fit',        value:'fit-content' },
  { name:'prose',      value:'65ch' },
  { name:'screen-sm',  value:'640px' },
  { name:'screen-md',  value:'768px' },
  { name:'screen-lg',  value:'1024px' },
  { name:'screen-xl',  value:'1280px' },
  { name:'screen-2xl', value:'1536px' }
]

const COLUMN_COUNTS = [
  { name:'1',    value:'1'    },
  { name:'2',    value:'2'    },
  { name:'3',    value:'3'    },
  { name:'4',    value:'4'    },
  { name:'5',    value:'5'    },
  { name:'6',    value:'6'    },
  { name:'7',    value:'7'    },
  { name:'8',    value:'8'    },
  { name:'9',    value:'9'    },
  { name:'10',   value:'10'   },
  { name:'11',   value:'11'   },
  { name:'12',   value:'12'   }
]

const COLUMN_WIDTHS = [
  { name:'3xs',  value:'16rem' },
  { name:'2xs',  value:'18rem' },
  { name:'xs',   value:'20rem' },
  { name:'sm',   value:'24rem' },
  { name:'md',   value:'28rem' },
  { name:'lg',   value:'32rem' },
  { name:'xl',   value:'36rem' },
  { name:'2xl',  value:'42rem' },
  { name:'3xl',  value:'48rem' },
  { name:'4xl',  value:'56rem' },
  { name:'5xl',  value:'64rem' },
  { name:'6xl',  value:'72rem' },
  { name:'7xl',  value:'80rem' }
]

const FONT_SIZES = [
  { name: 'xs',   size: '0.75rem (12px)',   lineHeight: '1rem (16px)' },
  { name: 'sm',   size: '0.875rem (14px)',  lineHeight: '1.25rem (20px)' },
  { name: 'base', size: '1rem (16px)',      lineHeight: '1.5rem (24px)' },
  { name: 'lg',   size: '1.125rem (18px)',  lineHeight: '1.75rem (28px)' },
  { name: 'xl',   size: '1.25rem (20px)',   lineHeight: '1.75rem (28px)' },
  { name: '2xl',  size: '1.5rem (24px)',    lineHeight: '2rem (32px)' },
  { name: '3xl',  size: '1.875rem (30px)',  lineHeight: '2.25rem (36px)' },
  { name: '4xl',  size: '2.25rem (36px)',   lineHeight: '2.5rem (40px)' },
  { name: '5xl',  size: '3rem (48px)',      lineHeight: '1' },
  { name: '6xl',  size: '3.75rem (60px)',   lineHeight: '1' },
  { name: '7xl',  size: '4.5rem (72px)',    lineHeight: '1' },
  { name: '8xl',  size: '6rem (96px)',      lineHeight: '1' },
  { name: '9xl',  size: '8rem (128px)',     lineHeight: '1' }
]

const FONT_WEIGHTS = [
  { name:'thin',       value:'100' },
  { name:'extralight', value:'200' },
  { name:'light',      value:'300' },
  { name:'normal',     value:'400' },
  { name:'medium',     value:'500' },
  { name:'semibold',   value:'600' },
  { name:'bold',       value:'700' },
  { name:'extrabold',  value:'800' },
  { name:'black',      value:'900' }
]

const FONT_TRACKING_OPTIONS = [
  {name:'tighter', value:'-0.05em'},
  {name:'tight',   value:'-0.025em'},
  {name:'normal',  value:'0'},
  {name:'wide',    value:'0.025em'},
  {name:'wider',   value:'0.05em'},
  {name:'widest',  value:'0.1em'}
]

const FONT_RELATIVE_LINE_HEIGHTS = [
  { name:'3',  value:'.75' },
  { name:'4',  value:'1' },
  { name:'5',  value:'1.25' },
  { name:'6',  value:'1.5' },
  { name:'7',  value:'1.75' },
  { name:'8',  value:'2' },
  { name:'9',  value:'2.25' },
  { name:'10', value:'2.5' }
]

const FONT_FIXED_LINE_HEIGHTS = [
  { name:'none',    value:'1' },
  { name:'tight',   value:'1.25' },
  { name:'snug',    value:'1.375' },
  { name:'normal',  value:'1.5' },
  { name:'relaxed', value:'1.625' },
  { name:'loose',   value:'2' }
]

const TEXT_DECORATION_THICKNESSES = [
  { name:'0', value:'0px' },
  { name:'1', value:'1px' },
  { name:'2', value:'2px' },
  { name:'4', value:'4px' },
  { name:'8', value:'8px' }
]

const TEXT_UNDERLINE_OFFSETS = [
  { name:'0', value:'0px' },
  { name:'1', value:'1px' },
  { name:'2', value:'2px' },
  { name:'4', value:'4px' },
  { name:'8', value:'8px' }
]

const BORDER_RADIUS_SCALE = [
  { name:'-none', value:'0px' },
  { name:'-sm',   value:'0.125rem' },
  { name:'',      value:'0.25rem' },
  { name:'-md',   value:'0.375rem' },
  { name:'-lg',   value:'0.5rem' },
  { name:'-xl',   value:'0.75rem' },
  { name:'-2xl',  value:'1rem' },
  { name:'-3xl',  value:'1.5rem' },
  { name:'-full', value:'9999px' },
]

const BORDER_WIDTH_SCALE = [
  { name:'-0', value:'0px' },
  { name:'-2', value:'2px' },
  { name:'-4', value:'4px' },
  { name:'-8', value:'8px' },
  { name:'',   value:'1px' }
]

const DIVIDE_WIDTH_SCALE = [
  { name:'-0', value:'0px' },
  { name:'-2', value:'2px' },
  { name:'-4', value:'4px' },
  { name:'-8', value:'8px' },
  { name:'',   value:'1px' }
]

const OUTLINE_WIDTH_SCALE = [
  { name:'0', value:'0px' },
  { name:'1', value:'1px' },
  { name:'2', value:'2px' },
  { name:'4', value:'4px' },
  { name:'8', value:'8px' }
]

const OUTLINE_OFFSET_SCALE = [
  { name:'0', value:'0px' },
  { name:'1', value:'1px' },
  { name:'2', value:'2px' },
  { name:'4', value:'4px' },
  { name:'8', value:'8px' }
]

const RING_WIDTH_SCALE = [
  { name:'-0', value:'0px' },
  { name:'-1', value:'1px' },
  { name:'-2', value:'2px' },
  { name:'-4', value:'4px' },
  { name:'-8', value:'8px' },
  { name:'',   value:'3px' },
]

const RING_OFFSET_WIDTH_SCALE = [
  { name:'0', value:'0px' },
  { name:'1', value:'1px' },
  { name:'2', value:'2px' },
  { name:'4', value:'4px' },
  { name:'8', value:'8px' }
]

const BLUR_SCALE = [
  { name:'-none', value:'0' },
  { name:'-sm',   value:'4px' },
  { name:'',      value:'8px' },
  { name:'-md',   value:'12px' },
  { name:'-lg',   value:'16px' },
  { name:'-xl',   value:'24px' },
  { name:'-2xl',  value:'40px' },
  { name:'-3xl',  value:'64px' }
]

const BRIGHTNESS_SCALE = [
  { name:'0',   value:'0' },
  { name:'50',  value:'.5' },
  { name:'75',  value:'.75' },
  { name:'90',  value:'.9' },
  { name:'95',  value:'.95' },
  { name:'100', value:'1' },
  { name:'105', value:'1.05' },
  { name:'110', value:'1.1' },
  { name:'125', value:'1.25' },
  { name:'150', value:'1.5' },
  { name:'200', value:'2' }
]

const CONTRAST_SCALE = [
  { name:'0',   value:'0' },
  { name:'50',  value:'.5' },
  { name:'75',  value:'.75' },
  { name:'100', value:'1' },
  { name:'125', value:'1.25' },
  { name:'150', value:'1.5' },
  { name:'200', value:'2' }
]

const HUE_SCALE = [
  { name:'0',   value:'0deg' },
  { name:'15',  value:'15deg' },
  { name:'30',  value:'30deg' },
  { name:'60',  value:'60deg' },
  { name:'90',  value:'90deg' },
  { name:'180', value:'180deg' }
]

const SATURATE_SCALE = [
  { name:'0',   value:'0' },
  { name:'50',  value:'.5' },
  { name:'75',  value:'.75' },
  { name:'100', value:'1' },
  { name:'125', value:'1.25' },
  { name:'150', value:'1.5' },
  { name:'200', value:'2' }
]

const TRANSITION_DURATION_SCALE = [
  { name:'75',   value:'75ms' },
  { name:'100',  value:'100ms' },
  { name:'150',  value:'150ms' },
  { name:'200',  value:'200ms' },
  { name:'300',  value:'300ms' },
  { name:'500',  value:'500ms' },
  { name:'700',  value:'700ms' },
  { name:'1000', value:'1000ms' }
]

const TRANSITION_DELAY_SCALE = [
  { name:'75',   value:'75ms' },
  { name:'100',  value:'100ms' },
  { name:'150',  value:'150ms' },
  { name:'200',  value:'200ms' },
  { name:'500',  value:'500ms' },
  { name:'300',  value:'300ms' },
  { name:'700',  value:'700ms' },
  { name:'1000', value:'1000ms' }
]

const SCALE_SCALE = [
  { name:'0',   value:'0' },
  { name:'50',  value:'.5' },
  { name:'75',  value:'.75' },
  { name:'90',  value:'.9' },
  { name:'95',  value:'.95' },
  { name:'100', value:'1' },
  { name:'105', value:'1.05' },
  { name:'110', value:'1.1' },
  { name:'125', value:'1.25' },
  { name:'150', value:'1.5' },
]

const ROTATE_SCALE = [
  { name:'0',   value:'0deg' },
  { name:'1',   value:'1deg' },
  { name:'2',   value:'2deg' },
  { name:'3',   value:'3deg' },
  { name:'6',   value:'6deg' },
  { name:'12',  value:'12deg' },
  { name:'45',  value:'45deg' },
  { name:'90',  value:'90deg' },
  { name:'180', value:'180deg' }
]

const SKEW_SCALE = [
  { name:'0',  value:'0deg' },
  { name:'1',  value:'1deg' },
  { name:'2',  value:'2deg' },
  { name:'3',  value:'3deg' },
  { name:'6',  value:'6deg' },
  { name:'12', value:'12deg' }
]

exports.SCREENS                       = SCREENS
exports.DEFAULT_SPACING_SCALE         = DEFAULT_SPACING_SCALE
exports.CORE_DEFAULT_FRACTIONAL_SCALE = CORE_DEFAULT_FRACTIONAL_SCALE
exports.FIFTHS_FRACTIONAL_SCALE       = FIFTHS_FRACTIONAL_SCALE
exports.SIXTHS_FRACTIONAL_SCALE       = SIXTHS_FRACTIONAL_SCALE
exports.TWELFTHS_FRACTIONAL_SCALE     = TWELFTHS_FRACTIONAL_SCALE
exports.DEFAULT_OPACITY_SCALE         = DEFAULT_OPACITY_SCALE
exports.MAX_WIDTH_SCALE               = MAX_WIDTH_SCALE

/*        LAYOUT SCALES        */

exports.COLUMN_COUNTS                 = COLUMN_COUNTS
exports.COLUMN_WIDTHS                 = COLUMN_WIDTHS

/*        TYPOGRAPHY SCALES        */

exports.FONT_SIZES                    = FONT_SIZES
exports.FONT_WEIGHTS                  = FONT_WEIGHTS
exports.FONT_TRACKING_OPTIONS         = FONT_TRACKING_OPTIONS
exports.FONT_RELATIVE_LINE_HEIGHTS    = FONT_RELATIVE_LINE_HEIGHTS
exports.FONT_FIXED_LINE_HEIGHTS       = FONT_FIXED_LINE_HEIGHTS
exports.TEXT_DECORATION_THICKNESSES   = TEXT_DECORATION_THICKNESSES
exports.TEXT_UNDERLINE_OFFSETS        = TEXT_UNDERLINE_OFFSETS

/*        BORDER SCALES        */

exports.BORDER_RADIUS_SCALE           = BORDER_RADIUS_SCALE
exports.BORDER_WIDTH_SCALE            = BORDER_WIDTH_SCALE
exports.DIVIDE_WIDTH_SCALE            = DIVIDE_WIDTH_SCALE
exports.OUTLINE_WIDTH_SCALE           = OUTLINE_WIDTH_SCALE
exports.OUTLINE_OFFSET_SCALE          = OUTLINE_OFFSET_SCALE
exports.RING_WIDTH_SCALE              = RING_WIDTH_SCALE
exports.RING_OFFSET_WIDTH_SCALE       = RING_OFFSET_WIDTH_SCALE

/*        FILTER SCALES        */

exports.BLUR_SCALE                    = BLUR_SCALE
exports.BRIGHTNESS_SCALE              = BRIGHTNESS_SCALE
exports.CONTRAST_SCALE                = CONTRAST_SCALE
exports.HUE_SCALE                     = HUE_SCALE
exports.SATURATE_SCALE                = SATURATE_SCALE

/*        TRANSITION AND ANIMATION SCALES        */

exports.TRANSITION_DURATION_SCALE     = TRANSITION_DURATION_SCALE
exports.TRANSITION_DELAY_SCALE        = TRANSITION_DELAY_SCALE

/*        TRANSFORM SCALES        */

exports.SCALE_SCALE                   = SCALE_SCALE
exports.ROTATE_SCALE                  = ROTATE_SCALE
exports.SKEW_SCALE                    = SKEW_SCALE
