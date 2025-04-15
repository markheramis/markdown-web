/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
const safelist: string[] = [];

for (let i = 0; i <= 100; i++) {
    safelist.push(`pl-[${i * 4}px]`);
}

module.exports = {
    darkMode: ['class'],
    content: ['./resources/**/*.tsx', './resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.ts'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        safelist,
        extend: {
            zIndex: {
                screens: {
                    xs: '480px',
                },
                fontFamily: {
                    inter: ['Inter', 'sans-serif'],
                    poppins: ['Poppins', 'sans-serif'],
                },
            },
        },
    },
    plugins: [defaultTheme],
};
