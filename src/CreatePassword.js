import PropTypes from 'prop-types'
import { alphabet, specialCharacters, numbers } from './characters/characters'

const characters = [alphabet,specialCharacters,numbers]

export default function createPassword(object){
    const minLength = object.min 
    const maxLength = object.max
    const randomLength = passwordLength(minLength, maxLength)
    return parsePassword(object.special, object.number, randomLength)
}

function passwordLength(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function parsePassword(special, number, length){
    if(number === false && special === false) return insecurePassword(length)
    else if(number === true && special === true) return securePassword(length)
    else if(special === true) return specialPassword(length) 
    else if(number === true) return numberPassword(length)
    else {return}
}

function securePassword(length){
    let array = []
    for(let i = 0; i < length; i++){
        const randomCharacterCategory = characters[Math.floor(Math.random() * characters.length)]
        const randomCharacter = randomCharacterCategory[Math.floor(Math.random()* randomCharacterCategory.length)]
        array.push(randomCharacter)
    }
    const password = array.join('')
    return password 
}

function numberPassword(length){
    let array = []
    for(let i = 0; i < length; i++){
        const characterCategory = [alphabet,numbers]
        const randomCategory = characterCategory[Math.floor(Math.random() * characterCategory.length)]
        const randomCharacter = randomCategory[Math.floor(Math.random()* randomCategory.length)]
        array.push(randomCharacter)
    }
    const password = array.join('')
    return password 
}

function specialPassword(length){
    let array = []
    for(let i = 0; i < length; i++){
        const characterCategory = [alphabet,specialCharacters]
        const randomCategory = characterCategory[Math.floor(Math.random() * characterCategory.length)]
        const randomCharacter = randomCategory[Math.floor(Math.random()* randomCategory.length)]
        array.push(randomCharacter)
    }
    const password = array.join('')
    return password 
}

function insecurePassword(length){
    let array = []
    for(let i = 0; i < length; i++){
        const randomCharacter = alphabet[Math.floor(Math.random() * length)]
        array.push(randomCharacter)
    }
    const password = array.join('')
    return password 
}


createPassword.propTypes = {
    object: PropTypes.object
}