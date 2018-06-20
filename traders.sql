USE TraderApp;

DROP TABLE IF EXISTS traders;
CREATE TABLE traders
(
  firstName		varchar(255) NOT NULL,
  
  PRIMARY KEY (firstName)
);

