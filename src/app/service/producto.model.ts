export interface InfoApiresponse {
    //count: number;
    products: ModelProduct[];
}
interface rate{
    rate: number,
    count: number
}

export interface ModelProduct{
    title: string;
    id: number;
    description: string;
    category: string;
    image: string;
    price: number;
    rating: rate


    // idProducto: number,
    // clave: string,
    // producto: string,
    // marca: string,
    // unidadMedida: string,
    // existencia: number,
    // comercioIva: number,
    // distribuidorDctoIva: number,
    // distribuidorIva: number,
    // publicoIva: number,
    // activo: boolean,
    // descontinuado: boolean
}