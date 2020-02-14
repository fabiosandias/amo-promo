const API = {
    URL: 'https://demo.assisttrip.com.br/api',
    HEADERS: {
        AUTH: 'Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV',
    },
}

const STATE_OF_BRAZIL = [
    { state: 'AC', name: 'Acre' },
    { state: 'AL', name: 'Alagoas' },
    { state: 'AP', name: 'Amapá' },
    { state: 'AM', name: 'Amazonas' },
    { state: 'BA', name: 'Bahia' },
    { state: 'CE', name: 'Ceará' },
    { state: 'DF', name: 'Distrito Federal' },
    { state: 'ES', name: 'Espírito Santo' },
    { state: 'GO', name: 'Goiás' },
    { state: 'MA', name: 'Maranhão' },
    { state: 'MT', name: 'Mato Grosso' },
    { state: 'MS', name: 'Mato Grosso do Sul' },
    { state: 'MG', name: 'Minas Gerais' },
    { state: 'PA', name: 'Pará' },
    { state: 'PB', name: 'Paraíba' },
    { state: 'PR', name: 'Paraná' },
    { state: 'PE', name: 'Pernambuco' },
    { state: 'PI', name: 'Piauí' },
    { state: 'RJ', name: 'Rio de Janeiro' },
    { state: 'RN', name: 'Rio Grande do Norte' },
    { state: 'RS', name: 'Rio Grande do Sul' },
    { state: 'RO', name: 'Rondônia' },
    { state: 'RR', name: 'Roraima' },
    { state: 'SC', name: 'Santa Catarina' },
    { state: 'SP', name: 'São Paulo' },
    { state: 'SE', name: 'Sergipe' },
    { state: 'TO', name: 'Tocantins' }
];

const ACTION = {
    SEARCH: 'SEARCH',
    GET_PRODUCTS: 'GET_PRODUCTS',
    SAVE_SELECTED_PRODUCT: 'SAVE_SELECTED_PRODUCT',
    SAVE_COMBINE_PRODUCT: 'SAVE_COMBINE_PRODUCT',
    SAVE_SEARCH_FORM: 'SAVE_SEARCH_FORM',
    GET_SELECTED_PRODUCT: 'GET_SELECTED_PRODUCT'
}

export { API, STATE_OF_BRAZIL, ACTION};