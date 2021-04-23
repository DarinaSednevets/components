import PropTypes from 'prop-types'
import styles from './Statistics.module.css'

function getRandomColor() {
    const r = function () {
        return Math.floor(Math.random() * 256);
    };
    return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const Statistics = ({ title, stats }) => (

    <section className={styles.statistics}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}

        <ul className={styles.statList}>
            {stats.map(({ label, percentage }) =>
            (<li key={label} className={styles.item} style={{ backgroundColor: getRandomColor() }}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
            </li>))}
        </ul>
    </section>
)
Statistics.defaultProps = {
    title: ''
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,

        })
    ).isRequired,
}

export default Statistics;