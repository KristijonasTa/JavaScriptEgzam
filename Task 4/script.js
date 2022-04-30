/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


fetch(ENDPOINT)
  .then((response) => response.json())
  .then((value) => {
      const users = value;
      console.log(value)
      users.forEach(element => {
          const brand = document.createElement('h2');
          brand.innerText = element.brand;
          const models = document.createElement('div')
          models.innerText = element.models;
          document.getElementById('output').append(brand, models);
      });
  });

