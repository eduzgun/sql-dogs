DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    dog_id INT GENERATED ALWAYS AS IDENTITY,
    dog_name VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    age INT,
    color VARCHAR(20),
    weight_kg DECIMAL(5, 2),
    birth_date DATE,
    is_spayed_neutered BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (dog_id)
);

INSERT INTO dogs (dog_name, breed, age, color, weight_kg, birth_date, is_spayed_neutered)
VALUES
    ('Buddy', 'Golden Retriever', 3, 'Golden', 28.5, '2020-02-15', TRUE),
    ('Luna', 'Labrador Retriever', 2, 'Black', 25.1, '2021-05-10', FALSE),
    ('Rocky', 'German Shepherd', 4, 'Tan', 31.7, '2019-11-22', TRUE),
    ('Coco', 'Poodle', 5, 'Brown', 7.8, '2018-08-03', TRUE);
