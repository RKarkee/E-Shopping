import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";

const ProductList = (props) => {
  const { products, productsLoading, productsError, fetchProductlist } = props;
  console.log(
    "🚀 ~ file: ProductList.js ~ line 5 ~ ProductList ~ products",
    products
  );

  useEffect(() => {
    fetchProductlist();
  }, []);

  return (
    <>
      <div className="card-wrapper">
        <Row gutter={[16, 16]}>
          {products?.map((data) => (
            <Col span={8} xl={6} lg={6} md={12} sm={24} xs={24}>
              <Card
                hoverable
                bodyStyle={{
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  padding: 10,
                }}
                style={{ height: "380px" }}
              >
                <img 
                  src={`https://electronic-ecommerce.herokuapp.com/${data.image}`}
                  alt="Product image..."
                  width="250"
                />
                <h5>{data.name}</h5>
                <h5>{data.category[1]}</h5>
                <h5>{data.price}</h5>
                <h5>Stock:{data.stock}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
