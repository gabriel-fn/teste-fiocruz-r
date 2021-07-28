import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function RegistroTabela(props) {

    const listaRegistros = props.registros.map((registro) => {
        return ( 
            <tr key={registro.id}>
                <td className="border px-6 py-4">{registro.nome ? registro.nome : '-'}</td>
                <td className="border px-6 py-4">{registro.cpf ? registro.cpf : '-'}</td>
                <td className="border px-6 py-4">{registro.is_estrangeiro ? 'Sim' : 'Não'}</td>
                <td className="border px-6 py-4">{registro.municipio ? registro.municipio : '-'}</td>
                <td className="border px-6 py-4">{registro.uf ? registro.uf : '-'}</td>
                <td className="border px-6 py-4">{registro.nascimento ? registro.nascimento : '-'}</td>
                <td className="border px-6 py-4">{registro.nivel_formacao ? registro.nivel_formacao : '-'}</td>
            </tr>
        )
    })

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-6xl mt-6 mb-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                
                <div className="flex items-center justify-end mb-4">
                    <InertiaLink href="/registros/create" className="underline text-sm text-gray-600 hover:text-gray-900">
                        + Novo Registro
                    </InertiaLink>
                </div>

                <table className="w-full whitespace-no-wrapw-full whitespace-no-wrap table-auto">
                    <thead>
                        <tr className="text-center font-bold">
                            <th className="border px-6 py-4">Nome</th>
                            <th className="border px-6 py-4">Cpf</th>
                            <th className="border px-6 py-4">Estrangeiro?</th>
                            <th className="border px-6 py-4">Municipio</th>
                            <th className="border px-6 py-4">Uf</th>
                            <th className="border px-6 py-4">Nascimento</th>
                            <th className="border px-6 py-4">Formação</th>
                        </tr>
                    </thead>
                    <tbody>
                        { listaRegistros }
                    </tbody>
                </table>

            </div>
        </div>
    );
}
