import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.css'
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const TransactionHistory = ({ transactions }) => (
    <table className={styles.transactionHistory}>
        <thead>
            <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (

                <tr key={id}>
                    <td>{capitalizeFirstLetter(type)}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,

        })
    ).isRequired,
}

export default TransactionHistory;