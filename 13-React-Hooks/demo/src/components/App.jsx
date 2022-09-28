import React, { useState } from 'react';
import AppHooks from './AppHooks';
import AppClass from './AppClass';
//tengo 2 componentes, appHooks y AppClass.

//defino 2 estados. Uno 1) me dice si uso o no uso HOOKS, y el otro 2) si muestro o no muestro el estado SHOW.
export default function App() {
  const [useHook, setUseHook] = useState(true);
  const [show, setShow] = useState(true);
//1) aca declaro la constante  componetshow, con un ternario que dira. Si el ESTADO USEHOOK, es true, muestrame con Hooks, si es False, muestrame Classes
  const componentShown = useHook ? <AppHooks /> : <AppClass />;     //appHooks se muestra en TRUE
                                                                    //appClass se muestr en FALSE 
  return (  
    <>
      <div>
        <h3>Henry Hook Demo</h3>
        <button onClick={() => setUseHook(prev => !prev)}>    {/* Este onclick, me setea el estado de UseHooks, a su estado anterior. Simple*/}
          {`Change to ${useHook ? 'Hook' : 'Class'}`} {/*aca declaro lo que va en el imput del boton, y pregunto... useHook, es true? muestra Hokss, si es False, muestra Class*/}
        </button>
        <button onClick={() => setShow(prev => !prev)}> {/* Este onclick, me setea el estado de SHOW, a su estado anterior. si es true, lo manda a false, y si es falase lo manda a true. Simple*/}
          {show ? 'Hide' : 'Show'} {/* ENTONCES, el boton va a tener el escrito, de... si el estado de Show es true?  va a decir HIDE, si el estado de SHOW es false, va a decir SHOW (osea para ponerlo en show*/}
        </button>  {/* ESTO DE ACA ARRIBA ES SOLO Y SOLO LA CONFIGUACION DE LOS IMPUTS DE LOS BOTONES.*/}
      </div> 
      {                                   // ahora aca VOY A TRBAJAR CON LO QUE UESTRO Y LO QUE NO. POR ENDEE....
        show ? componentShown : null   //pregunto: el estado de show- Es true? ok si es true mostrame lo que tenga componentShow.
      }                                {/* Ahora, si esl estado de SHOW, es FALSE ??.. osea que no quiero que se meustre nada. Por ende, dame nulll. osea, no pongas nada. Fin*/}
    </>
  )
}