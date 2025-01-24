import './styles.css'

function Lesson07() {
  // --- Тип any - любой тип
  let city: any = 'Berlin';
  city = 2321112;
  city = [2343, 'London', true]

  //--- Типизация объекта через interface
  interface User {
    name: string,
    // при использовании знака вопроса, свойство можно не прописывать
    age?: number
    // при использовании union - number | undefined, свойство должно быть, но его значение может быть undefined
    // age: number | undefined
  }

  const userData: User = {
    name: 'John',
    age: 89
  }

  const userObj: User = {
    name: 'Marta',
    // age: undefined
  }

  // --- Создание интерфейса с одинаковым именем
  interface User {
    role?: string | null,
    //при добавление новых свойств с типами, используя, одноименные интерфейсы, 
    // переписывать старые свойства нельзя!!
    // age: string
  }

  const user: User = {
    name: 'Tom',
    role: null
  }

  //--- Наследование интерфейсов
  interface Person {
    personFullName: string,
    email: string
  }

  interface Admin extends Person {
    adminId: number
  }

  const personData: Person = {
    personFullName: 'Bob Smith',
    email: 'test@gmail.com'
  }

  const adminData: Admin = {
    personFullName: 'John Johnson',
    adminId: 13435,
    email: 'j@gmail.com'
  }

  //--- Типизация через type

  //используем type для создания усложненного типа
  type Weight = string | number | null

  //используем type для создания типа объекта
  type Animal = {
    name: string,
    weight?: Weight
  }

  const animalData: Animal = {
    name: 'Lion',
    weight: 200
  }

  const personWeight: Weight = null;

  //--- объединение типов
  type NewAnimal = Animal & { country: string }

  const zebraAnimal: NewAnimal = {
    name: 'Zebra',
    weight: '150',
    country: 'Afrika'
  }

  //---Generic & Type - дженерик это пременная в которую мы можем подставить 
  // нужный тип, в момент использования type
  type CustomTupel<T = string> = [number, string, T];

  const arrayMix: CustomTupel<boolean> = [23, 'Bob', true]
  const arrayMix2: CustomTupel<number> = [45, 'Tom', 2355]
  const arrayMix3: CustomTupel = [50, 'Mary', '34']

  // --- Generic & Interface
  interface Fruit<T = number> {
    title: string,
    address: T
  }

  const fruit1: Fruit = {
    title: 'Apple',
    address: 23746
  }

  const fruit: Fruit<string> = {
    title: 'Grape',
    address: 'Berlin 32342'
  }

  // const result: Fruit<string> = await fetch('sdf')

  // const result: Fruit = await fetch('sdfdf')

  // --- Пример использования union для ограничения переменной по значениям
  type Status = 'success' | 'error' | 'loading';

  const status: Status = 'error';
  // const apiStatus: Status = 'default';

  //--- Числовое перечисление
  enum Colors { Red, Black, Green = 1 };
  let currentColor: Colors = Colors.Black;
  console.log(currentColor);

  //---Строковое перечисление
  // enum для цветов светофора
  enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green'
  }

  const getAction = (light: TRAFFIC_LIGHT): string => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return 'Cтоп!';
      case TRAFFIC_LIGHT.YELLOW:
        return 'Приготовьтесь идти';
      case TRAFFIC_LIGHT.GREEN:
        return 'Можно идти'
    }
  }

  console.log(getAction(TRAFFIC_LIGHT.RED));

  // --- Mixed enum (строки и числа)
  enum RESULT {
    YES = 'yes',
    NO = 0
  }

  const result: RESULT = RESULT.NO;
  console.log(result);



  return (
    <div className="lesson07-wrapper">
      TS-lesson07
    </div>
  )
}

export default Lesson07;
