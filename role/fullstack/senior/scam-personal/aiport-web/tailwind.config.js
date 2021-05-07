module.exports = {
    theme: {
        extend: {
            screens: {
                'xs': { 'max': '480px' },
                'smm': { 'min': '481px' },
                'mdd': { 'min': '721px' },
                'lgg': { 'min': '1281px' }
            },
            colors: {
                gray: {
                    '250': '#EEEEEE'
                }
            }
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
        padding: ['responsive', 'hover', 'group-hover']
    }
}