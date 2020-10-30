import image from './assets/img.png'
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './classes/blocks'

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #FF0099, #493240)',
      color: '#FFFFFF',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }), 
  new TextBlock('Спасибо Владилену Минину за предоставленный урок', {
    styles: {
      background: 'linear-gradient(to left, #F2994A, #F2C94C)',
      padding: '1rem',
      'font-weight': 'bold',
      'text-align': 'center',
    }
  }),
  new ColumnsBlock([
    'Приложение на чистом CSS без использования библиотек.',
    'Узнаешь, как работают принципы SOLID и ООП в JavaScript за один курс',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками.',
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8E2De2, #4A00E0)',
      padding: '2rem',
      color: '#FFFFFF',
      'font-weight': 'bold'
    }
  })
]