import React, { useEffect } from 'react';

import { InertiaLink } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/inertia-react';

import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Select from '@/Components/Select';
import ValidationErrors from '@/Components/ValidationErrors';

export default function Registro(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        is_estrangeiro: 0,
        nome: '',
        cpf: '',
        uf: '',
        municipio: '',
        nascimento: '',
        nivel_formacao: ''
    });

    useEffect(() => {
        return () => {
            reset('nome', 'cpf');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('registro'));
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-6xl mt-6 mb-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

                <ValidationErrors errors={props.errors}/>

                <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">

                    <div className="flex items-center justify-end md:col-span-2 sm:col-span-1">
                        <Label forInput="is_estrangeiro" value="É estrangeiro?" />

                        <Input
                            type="radio"
                            name="is_estrangeiro"
                            value="1"
                            className="mt-1 block ml-4"
                            handleChange={onHandleChange}
                            required
                        /> Sim

                        <Input
                            type="radio"
                            name="is_estrangeiro"
                            value="0"
                            className="mt-1 block ml-4"
                            handleChange={onHandleChange}
                            required
                        /> Não
                    </div>

                    
                    <div>
                        <Label forInput="nome" value="Nome Completo" />

                        <Input
                            type="text"
                            name="nome"
                            value={data.nome}
                            className="mt-1 block w-full uppercase"
                            handleChange={onHandleChange}
                            maxLength="50"
                            required
                        />
                    </div>
                    
                    { data.is_estrangeiro == "0" &&
                        <div>
                            <Label forInput="cpf" value="Cpf" />

                            <Input
                                type="text"
                                name="cpf"
                                value={data.cpf}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                                maxLength="11"
                                minLength="11"
                                pattern="[0-9]+"
                            />
                        </div>
                    }

                    { data.is_estrangeiro == "0" &&
                        <div>
                            <Label forInput="uf" value="Uf de Nascimento" />

                            <Input
                                type="text"
                                name="uf"
                                value={data.uf}
                                className="mt-1 block w-full uppercase"
                                handleChange={onHandleChange}
                                maxLength="2"
                                minLength="2"
                                pattern="[a-zA-Z]+"
                            />
                        </div>
                    }

                    { data.is_estrangeiro == "0" &&
                        <div>
                            <Label forInput="municipio" value="Município de Nascimento" />

                            <Input
                                type="text"
                                name="municipio"
                                value={data.municipio}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                maxLength="50"
                            />
                        </div>
                    }
                    <div>
                        <Label forInput="nascimento" value="Data de Nascimento" />

                        <Input
                            type="date"
                            name="nascimento"
                            value={data.nascimento}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="nivel_formacao" value="Nível de Formação" />

                        <Select
                            name="nivel_formacao"
                            value={data.nivel_formacao}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        >

                            <option value="Nenhum">Nenhum</option>
                            <option value="Fundamental">Fundamental</option>
                            <option value="Médio">Médio</option>
                            <option value="Superior">Superior</option>
                            <option value="Pós-Graduação (Lato Sensu)">Pós-Graduação (Lato Sensu)</option>
                            <option value="Pós-Graduação (Stricto Sensu - Mestrado)">Pós-Graduação (Stricto Sensu - Mestrado)</option>
                            <option value="Pós-Graduação (Stricto Sensu - Doutorado)">Pós-Graduação (Stricto Sensu - Doutorado)</option>

                        </Select>
                    </div>

                    <div className="flex items-center justify-end mt-4 md:col-span-2 sm:col-span-1">
                        <InertiaLink href="/registros" className="underline text-sm text-gray-600 hover:text-gray-900">
                            Ver Registros
                        </InertiaLink>
                        <Button className="ml-4" processing={processing}>
                            Registrar
                        </Button>
                    </div>
                    
                </form>

            </div>
        </div>
    );
}
