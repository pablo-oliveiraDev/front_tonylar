import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`${process.env.dataBaseURL}/allProducts`);
    const data = await response.json();
    return {
        props: {
            products: data.product,
            res: data.msg,
        },
    };
};