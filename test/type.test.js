import { expect } from "chai"; 
import { fetchUsers } from '../script.js'; 

describe('Тестирование типов данных', function() { 
    it('Проверка получения массива данных', async function () { 
        const users = await fetchUsers();
        expect(users).to.be.an('array');    
      });
      it('Проверка массивов что в них есть id и они цифры', async function () { 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('id').that.is.a('number'); 
      });
      });
      it('Проверка массивов что в них есть имена и они строки', async function () { 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('name').that.is.a('string'); 
      });
      });
      it('Проверка массивов что в них есть адреса и они объекты', async function () { 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('address').that.is.a('object'); 
      });
      });
      it('Проверка массивов что в них есть место работы и они объекты', async function () { 
        const users = await fetchUsers();
        users.forEach(user => {
          expect(user).to.have.property('company').that.is.a('object'); 
      });
      });
})