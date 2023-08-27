import styles from "../../assets/styles/menuMobile.module.scss";


export default function Menu({ children, menu }) {

    return (
        <>  {menu &&
            <div className={styles.containerMenu}>
                {children}

            </div>
        }

        </>
    )

}
