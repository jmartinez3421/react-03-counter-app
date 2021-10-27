import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe('Pruebas sobre el archivo 11-async-await.js', () => {
    //Indicamos que este test es async
    test('debe retornar el URL de la imagen', async () => {
        //Debemos poner el await ya que sino esta funcion nos devolvería una promesa
        const url = await getImagen();

        //Si hay algún error con APIKey nos avisaría ya que la url no incluiria https://
        expect(url.includes("https://")).toBe(true);
    });
    
})