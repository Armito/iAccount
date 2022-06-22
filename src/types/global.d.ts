interface Config {
    name: string
}

interface Account {
    id: string
    appName: string
    account: string
    password: string
}

type FormModel = Partial<Account>
