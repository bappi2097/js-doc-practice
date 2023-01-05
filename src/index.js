/**
 * @file index.js is the root file for this example app
 * @author Brad Traversy
 * @see <a href="https://traversymedia.com">Traversy Media</a>
 */

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id Student Id
 * @property {string} name Student name
 * @property {number|string} [age] Student age
 * @property {boolean} isActive Student is Active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  isActive: true,
  name: "Bappi Saha",
  age: 12,
}

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name
    /**
     * @property {number|string} age Persons age
     */
    this.age = personInfo.age
  }
  /**
   * @property {Function} greet A greeting with name and age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
  }
}
/**
 * Person one
 * see {@link Person}
 */
const person1 = new Person({
  name: "John Doe",
  age: 30,
})

person1.greet()
