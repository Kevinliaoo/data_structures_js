class HashTable {
    constructor(size) {
        this.data = new Array(size); 
    }
    hashMethod(key) {
        let hash = 0; 
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; 
        }
        return hash;
    }
    set(key, value) {
        // Hashear el key
        const address = this.hashMethod(key);
        // Checkear que el hash no exista dentro del hashTable
        if (!this.data[address]) {
            // Crear array vacío 
            this.data[address] = [];
        } 
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key); 
        const currentBucket = this.data[address]; 

        if(currentBucket) {
            // Recorrer por todos los elementos almacenados en el mismo address
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    // Retornar el value del key buscado 
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key) {
        const address = this.hashMethod(key); 
        const currentBucket = this.data[address]; 

        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const delItem = currentBucket[1]; 
                    delete currentBucket[i];
                    return delItem; 
                }
            }
        }
        return undefined; 
    }
    getKeys() {
        let keys = []; 
        for (let i = 0; i < this.data.length; i ++) {
            if (this.data[i] != undefined) {
                if (this.data[i].length > 0) {
                    for (let j of this.data[i]) {
                        keys.push(j[0]);
                    }
                }
            }
        }
        return keys;
    }
}