//1 способ - использование обычного css
import './styles.css'
//3 способ - использование библиотеки emotion (использование стилизованных компонентов)
import { BoxInfo, ContentContainer, Image, Text } from './styles'
import Example1 from '../../assets/avatar.jpg';
import Example2 from '../../assets/logo.jpg';


function Lesson08() {
  //Объект для inline стилей (2 способ)
  const textStyles = {
    color: 'blue',
    fontSize: '26px'
  }

  return (
    <div className='lesson08-wrapper'>
      {/* 2 способ - inline styles (передача объекта стилей в атрибут style) */}
      <div style={{ color: 'blueviolet', fontSize: '24px' }}>Inline style example 1</div>
      <p style={textStyles}>Inline style example 2</p>
      <div style={textStyles}>Inline style example 3</div>
      {/* 3 способ - использование библиотеки emotion */}
      <BoxInfo primary>
        <ContentContainer>
          <Image src={Example1} />
          <Text>Emotion example 1</Text>
        </ContentContainer>
      </BoxInfo>
      <BoxInfo>
        <ContentContainer>
          <Image src={Example2} />
          <Text>Emotion example 2</Text>
        </ContentContainer>
      </BoxInfo>
    </div>
  )
}

export default Lesson08
