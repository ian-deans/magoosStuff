drop database magoos;

create database magoos;

connect magoos;

create table "alcohol_items" (
    "id" AUTO_INCREMENT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cost" MONEY,
    "pour_cost" DECIMAL,
    "tax" DECIMAL,
    "mL" INTEGER,
    "ounces" INTEGER,
    "rep_id" INTEGER,
    "sale_price" MONEY,
    PRIMARY KEY ("id")
);


CREATE TABLE "reps" (
  "id" INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  "name" VARCHAR(255) NULL DEFAULT NULL,
  "company" VARCHAR(255) NULL DEFAULT NULL,
  "phone" VARCHAR(12) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);


ALTER TABLE "alcohol_items" ADD FOREIGN KEY (rep_id) REFERENCES "reps" ("id");
-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE "alcohol_items` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `reps` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `alcohol_items` (`id`,`name`,`cost`,`pour_cost`,`tax`,`mL`,`ounces`,`rep_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `reps` (`id`,`name`,`company`,`phone`) VALUES
-- ('','','','');