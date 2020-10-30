import {block} from '../utils'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './blocks'

export class Sidebar {
  constructor(selector, updateCallBack) {
    this.$el = document.querySelector(selector)
    this.update = updateCallBack
    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template) 
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name // event.target - Доступ к форме
    const value = event.target.value.value
    const styles = event.target.styles.value

    let newBlock = type === 'text'
      ? newBlock = new TextBlock(value, {styles})
      : newBlock = new TitleBlock(value, {styles})

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  
  }
}