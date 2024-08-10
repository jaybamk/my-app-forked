import { useEffect } from 'react';
import styles from '../signup.module.scss';

const CountrySelect = () => {
    useEffect(() => {
        const countries = [
            "Argentina", "Australia", "Austria", "Belgium", "Brazil", 
            "Canada", "Chile", "China", "Colombia", "Denmark", 
            "Egypt", "Finland", "France", "Germany", "Greece", 
            "India", "Indonesia", "Iran", "Iraq", "Ireland", 
            "Israel", "Italy", "Japan", "Kenya", "Malaysia", 
            "Mexico", "Netherlands", "New Zealand", "Nigeria", "Norway", 
            "Pakistan", "Peru", "Philippines", "Poland", "Portugal", 
            "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea", 
            "Spain", "Sweden", "Switzerland", "Thailand", "Turkey", 
            "United Arab Emirates", "United Kingdom", "United States", "Venezuela", "Vietnam"
        ];

        const countryOption = document.getElementById("country");
        if (countryOption) {
            countries.forEach(country => {
                const option = document.createElement("option");
                option.value = country;
                option.textContent = country;
                countryOption.appendChild(option);
            });
        }
    }, []);

    return <select id="country" className={`${styles.input} form-control border-primary`} required>
        <option value=""></option>
    </select>;
};

export default CountrySelect;