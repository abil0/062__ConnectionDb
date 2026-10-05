CREATE DATABASE mahasiswa;

CREATE TABLE biodata (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  nim VARCHAR(20) NOT NULL UNIQUE,
  kelas VARCHAR(20) NOT NULL
);

INSERT INTO biodata (nama, nim, kelas) VALUES
  ('Contoh Mahasiswa 1', '2023001', 'TI-A'),
  ('Contoh Mahasiswa 2', '2023002', 'TI-B'),
  ('Contoh Mahasiswa 3', '2023003', 'TI-A');
