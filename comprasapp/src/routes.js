import { BrowserRouter, Switch, Route } from "react-router-dom";

import './styles.css';

import Teste from "./geral/teste";
import Contador from "./geral/comunicacaoComps/contador";
import Pedido from "./geral/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./geral/comunicacaoComps/finalizacaoPedido/conclusao";

import App from './geral/home';
import DetalheProduto from './geral/detalheProduto';
import Carrinho from './geral/carrinho';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />

        <Route path="/teste" component={Teste} />
        <Route path="/geral/contador" exact={true} component={Contador} />
        <Route path="/geral/pedido" component={Pedido} />
        <Route path="/geral/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
    
    )
}