Material SQL:
https://shadow-spy-56d.notion.site/SQL-640b88d3a2ad4261bd6423c3a8ff6cbc

Pesquisa de Satisfação

Professor: Davi Lucciola
https://docs.google.com/forms/d/e/1FAIpQLSdQFYX3z-rAXIaoRUhZvRiPP3OCfKDDzOsa5wJfqmMig1PRHg/viewform

--------------------------------------------------------------------------------------

1. Crie o ambiente virtual
>| python -m venv .venv

2. Ativando o ambiente virtual
>| .venv\Scripts\activate

3. Instalando dependências.
>| pip install mysql-connector-python sqlalchemy

4. Criando requirements.txt
>| pip freeze > requirements.txt

--------------------------------------------------------------------------------
Requisitos do Projeto.

# Sistema de Gerenciamento de um Hospital

Você desenvolverá um sistema de gerenciamento de um hospital, imagine que a gerência do hospital que irá utilizar

## Requisitos

- Pacientes
O sistema deve permitir o cadastro, leitura, edição e desativação de pacientes. 
O paciente deve conter: nome, cpf, data_nascimento, peso, altura, ativo

- Medicos
O sistema deve permitir o cadastro, leitura, e edição e desativação de médicos
O medico deve conter: nome, cpf, data_nascimento, peso, altura, ativo
Mas o médico também poderá ter uma ou mais especializações.

--------------------------------------------------------------------------------
main.py

from medico import menu_medicos
from paciente import menu_pacientes

def menu_principal():
    print('------------------------------')
    print('          Hospital            ')
    print('------------------------------')
    print(' QUAL SISTEMA DESEJA ACESSAR? ')
    print('[1] - Medicos')
    print('[2] - Pacientes')
    print('[3] - Marcar Consulta')
    print('[4] - Sair')
    print('------------------------------')

    opcao = input('Digite uma opção: ')
    return opcao


while True:
    opcao = menu_principal()

    if opcao == '1':
        menu_medicos()
    elif opcao == '2':
        menu_pacientes()
    elif opcao == '3':
        pass # Menu Consultas
    elif opcao == '4':
        break
    else:
        print('OPÇÃO INVÁLIDA! DIGITE NOVAMENTE.')

print('Fim do Programa!')

------------------------------------------------------------------

db.py

from datetime import date
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, Date, String, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker


# Conexão com o Banco de Dados
# engine = create_engine('sqlite:///hospital.db')
engine = create_engine('mysql+mysqlconnector://root:@127.0.0.1:3306/hospital', echo=True)

# Classe Base do SQLAlchemy
ModelBase = declarative_base()

# Criando funções para abrir a sessão.
SessionLocal = sessionmaker(bind=engine)
def get_session():
    return SessionLocal()


class Paciente(ModelBase):
    __tablename__ = 'pacientes'

    id: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(255), nullable=False)
    cpf: str = Column(String(11), nullable=False, unique=True)
    data_nascimento: date = Column(Date, nullable=True)
    ativo: bool = Column(Boolean, default=True)


if __name__ == '__main__':
    ModelBase.metadata.create_all(bind=engine)


------------------------------------------------------------------
paciente.py


from datetime import datetime
from db import get_session, Paciente


def menu_pacientes():
    print('------------------------------')
    print('          Pacientes           ')
    print('------------------------------')
    print('[1] - Listar os pacientes')
    print('[2] - Cadastrar um novo paciente')
    print('[3] - Detalhar um paciente')
    print('[4] - Atualizar um paciente')
    print('[4] - Remover um paciente')
    print('[5] - Voltar')
    print('------------------------------')

    opcao = input('Digite uma opção: ')
    
    if opcao == '1':
        with get_session() as session:
            pacientes = session.query(Paciente).all()
        
        print(pacientes)

    if opcao == '2':
        session = get_session()
        paciente = Paciente(
            nome=input('Digite o nome do paciente: '),
            cpf=input('Digite o cpf do paciente: '),
            data_nascimento=datetime.strptime(input('Digite a data de nascimento do paciente: '), '%d/%m/%Y').date()
        )
        session.add(paciente)
        session.commit()
        session.close()
        


------------------------------------------------------------

def menu_medicos():
    print('------------------------------')
    print('           Medicos            ')
    print('------------------------------')
    print('[1] - Listar os medicos')
    print('[2] - Cadastrar um novo medico')
    print('[3] - Detalhar um medico')
    print('[4] - Atualizar um medico')
    print('[4] - Remover um medico')
    print('[5] - Voltar')
    print('------------------------------')

    opcao = input('Digite uma opção: ')
    return opcao