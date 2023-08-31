//sebelum melanjutkan, kita deklarasikan beberapa array kosong yang nantinya akan diisi
let array = []
let arrayIndexGanjil = []
let arrayIndexGenap = []


//langkah pertama kita buat 100 array dengan rentang nilai 1-50
function makeArray() {
    for (let i = 0; i < 100; i++) {
        let number = Math.floor(Math.random() * 50 + 1)
        array.push(number)
    }

    return console.log(`Array yang didapatkan adalah : `, array)
}

//kita lakukan fungsi pertama terlebih dahulu
makeArray()

//langkah kedua kita pisahkan berdasarkan index ganjil dan index genap
function pemisahan() {
    for (let i in array) {
        if ( i % 2 == 1) {
            arrayIndexGanjil.push(array[i])
        } else {
            arrayIndexGenap.push(array[i])
        }
    }
    return console.log(`Array berindeks ganjil adalah :`, arrayIndexGanjil, '\n', `sedangkan Array berindeks genap adalah :`, arrayIndexGenap)
}

//selanjutnya kita lakukan fungsi kedua
pemisahan()

//langkah ketiga, kita cari informasi nilai total, nilai rata rata, nilai max, dan nilai min pada setiap array

//fungsi nilai total --> untuk mencari nilai total, agar bisa dipanggil kembali
function nilaiTotal(arr) {
    let jumlah = 0
    for (let i in arr) {
        jumlah += arr[i]
    }
    return jumlah
}

//fungsi nilai rata rata --> untuk mencari nilai rata rata
function nilaiRataRata(arr) {
    let rataRata = nilaiTotal(arr) / arr.length
    return rataRata
}

//fungsi nilai max --> untuk mencari nilai maks
function nilaiMax(arr) {
    let nilaiMax = 0
    for (let i in arr) {
        if (nilaiMax < arr[i]) {
            nilaiMax = arr[i]
        }
    }
    return nilaiMax
}

//fungsi nilai min --> untuk mencari nilai min
function nilaiMin(arr) {
    let nilaiMin = 50
    for (let i in arr) {
        if (nilaiMin > arr[i]) {
            nilaiMin = arr[i]
        }
    }
    return nilaiMin
}

//kita console ke dalam log untuk masing masing nilai pada masing masing array
console.log('')

console.log(`Total nilai pada array index ganjil adalah ${nilaiTotal(arrayIndexGanjil)}`)
console.log(`Rata-rata nilai pada array index ganjil adalah ${nilaiRataRata(arrayIndexGanjil)}`)
console.log(`Nilai maksimum pada array index ganjil adalah ${nilaiMax(arrayIndexGanjil)}`)
console.log(`Nilai mainimum pada array index ganjil adalah ${nilaiMin(arrayIndexGanjil)}`)

console.log('')

console.log(`Total nilai pada array index genap adalah ${nilaiTotal(arrayIndexGenap)}`)
console.log(`Rata-rata nilai pada array index genap adalah ${nilaiRataRata(arrayIndexGenap)}`)
console.log(`Nilai maksimum pada array index genap adalah ${nilaiMax(arrayIndexGenap)}`)
console.log(`Nilai mainimum pada array index genap adalah ${nilaiMin(arrayIndexGenap)}`)

console.log('')

//buat fungsi perbandingan, disini kita menggunakan satu fungsi saja, tapi untuk deskripsinya bisa diubah sesuai dengan nilai yang dimasukkan
function perbandingan(a, deskripsiNilaiA, b, deskripsiNilaiB) {
    if (a > b) {
        console.log(`${deskripsiNilaiA} lebih besar daripada ${deskripsiNilaiB}`)
    } else if (a < b) {
        console.log(`${deskripsiNilaiA} lebih kecil daripada ${deskripsiNilaiB}`)
    } else {
        console.log(`${deskripsiNilaiA} sama dengan ${deskripsiNilaiB}`)
    }
}

//kita console ke dalam log untuk masing masing perbandingan nilai
perbandingan(nilaiTotal(arrayIndexGanjil), "nilai total array index ganjil", nilaiTotal(arrayIndexGenap), "nilai total array index genap")
perbandingan(nilaiRataRata(arrayIndexGanjil), "nilai rata rata array index ganjil", nilaiRataRata(arrayIndexGenap), "nilai rata rata array index genap")
perbandingan(nilaiMax(arrayIndexGanjil), "nilai maksimum array index ganjil", nilaiMax(arrayIndexGenap), "nilai maksimum array index genap")
perbandingan(nilaiMin(arrayIndexGanjil), "nilai minimum array index ganjil", nilaiMin(arrayIndexGenap), "nilai minimum array index genap")