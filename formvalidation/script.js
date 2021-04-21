const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Navn er nødvendigt')
  }

  if (email.value.length <= 3) {
    messages.push('Email skal være længere end 3 tegn')
  }

  if (email.value.length >= 30) {
    messages.push('Email skal være kortere end 30 tegn')
  }

  if (email.value === 'email') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})