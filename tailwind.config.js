module.exports = {
  purge: {
    content: ['./build/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#231F20',
          secondary: '#E8E8E8',
          dark: '#0B090D',
          red: '#B11E23',
          gray: '#F1F1F1',
          "text-gray": '#939393',
          "text-dark": '#484848',
          "border-gray": '#E8E8E8'
        }
      },
      spacing: {
        88: '22rem'
      },
      fontFamily: {
        'body': ["Segoe UI"],
        'title': ['Antique Olive Std Nord']
      },
      zIndex: {
        "-1": '-1'
      },
      transformOrigin: {
        "0": "0%",
      }
    }
  },
  variants: {
    extend: {
      padding: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
