import ReactDom from 'react-dom';
import React from 'react';
import PrimeiroComponente from './components/PrimeiroComponente';
import {CompA, CompB} from './components/DoisComponentes';
import MultiElementos from './components/MultElementos';
import FamiliaDognini from './components/FamiliaDognini';
import Familia from './components/Familia';
import Membro from './components/Membro';


const elemento = document.getElementById('root');
ReactDom.render(
    <div>
        <PrimeiroComponente valor="Valor passado por props"/>
        <CompA valor='A'/>
        <CompB valor = 'B'/>
        <MultiElementos />
        <FamiliaDognini/>
        <Familia>
            <Membro nome='Jaime' sobrenome='Jose'/>
        </Familia>
    </div>
    , elemento);