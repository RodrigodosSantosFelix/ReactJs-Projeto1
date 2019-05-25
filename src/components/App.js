import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Post title="Aprendendo ReactJs pelo YouTube" />
                <Post title="ReactJs vai gerar o dinheiro para meu intercambio" />
                <Post title="Quero fazer game AAA" />
            </div>
        );
    }
}