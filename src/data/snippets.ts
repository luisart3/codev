export const snippets = [
  {
    user: 'Alex Pérez',
    initials: 'AP',
    role: 'Backend Developer',
    time: '1h',
    color: '#EEF2FF',
    textColor: '#2A53F3',
    lang: 'Python',
    langColor: '#3572A5',
    caption: 'Quick tip for making HTTP requests in Python 🐍',
    code: `import requests

response = requests.get(
  'https://api.example.com/data'
)

print(response.json())`,
  },
  {
    user: 'Luis Arteaga',
    initials: 'LA',
    role: 'Frontend Developer',
    time: '20m',
    color: '#f0fdf4',
    textColor: '#16a34a',
    lang: 'TypeScript',
    langColor: '#3178c6',
    caption: 'Clean way to type your arrow functions in TS ⚡',
    code: `const greet = (name: string): string => {
  return \`Hello, \${name}!\`
}

console.log(greet('Codev'))`,
  },
  {
    user: 'María González',
    initials: 'MG',
    role: 'Full Stack Developer',
    time: '3h',
    color: '#fff7ed',
    textColor: '#ea580c',
    lang: 'JavaScript',
    langColor: '#f7df1e',
    caption: 'Array methods you should know in JS 🔥',
    code: `const devs = ['Alex', 'Luis', 'María']

const upper = devs
  .filter(d => d.length > 4)
  .map(d => d.toUpperCase())

console.log(upper)`,
  },
]