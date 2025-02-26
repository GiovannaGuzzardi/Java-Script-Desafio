# problemas que precisam ser abordados
    tratamento de erros e Promise 
    estudar sincroniedade e assincroniedade
    async/await
    recursividade

# promisse
    Uma Promise pode estar em três estados:
    Pendência (Pending): A operação assíncrona está em andamento.
    Resolvida (Resolved/Fulfilled): A operação foi concluída com sucesso.
    Rejeitada (Rejected): A operação falhou.

# exemplo de chamada de api com tratamento de erro
    import { useState, useEffect } from 'react';

    const MyComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Função assíncrona para pegar dados da API
        const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            if (!response.ok) {
            throw new Error('Erro ao buscar dados');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, []); // Recarrega apenas uma vez após o componente ser montado

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div>
        <h1>Dados:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
    };

    export default MyComponent;

# exemplo de promisse
    var expect = function(val) {
        return {
            toBe: function(val2) {
                return new Promise((resolve, reject) => {
                    if (val !== val2) {
                        reject(new Error('Not Equal'));
                    } else {
                        resolve(true);
                    }
                });
            },
            notToBe: function(val2) {
                return new Promise((resolve, reject) => {
                    if (val === val2) {
                        reject(new Error('Equal'));
                    } else {
                        resolve(true);
                    }
                });
            }
        };
    };

    // Execução de testes com Promessas

    expect(5).toBe(5)
        .then(result => console.log(result))  // Esperado: true
        .catch(e => console.log({ error: e.message }));

