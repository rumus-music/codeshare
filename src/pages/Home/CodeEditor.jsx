import * as Styled from './styles.jsx';
import macDots from 'assets/mac_buttons.svg';

export const CodeEditor = ({ color }) => {
  return (
    <>
      <Styled.Textarea style={{ background: color }}>
        <div className='editor__dots'>
          <img src={macDots} alt="" aria-hidden='true' />
        </div>
        <textarea placeholder='Insira aqui o seu código...'>
        </textarea>
      </Styled.Textarea>
      <Styled.HightlightBtn>Visualizar com o Highlight</Styled.HightlightBtn>
    </>
  );
};
