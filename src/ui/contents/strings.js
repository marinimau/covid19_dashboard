/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export const appInfo = {
    name: 'Covid19 Dashboard',
    version: '1.0.0 beta'
};

export const loadingMessages = {
    loading: 'Caricamento...',
    error: 'Qualcosa è andato storto, ricarica la pagina'
};

export const screenTitles = {
    home: 'Home',
    latestUpdateResume: 'Resoconto giornaliero',
    newCases: 'Nuovi casi',
    recovered: 'Guariti',
    died: 'Deceduti',
    currentPositive: 'Ripartizione positivi',
    swab: 'Andamento tamponi'
};


export const chartTitles = {
    totalCasesCurve: 'Andamento casi totali',
    newCasesCurve: 'Andamento contagi giornalieri',
    currentPositive: 'Positivi Attuali',
    recovered: 'Guariti',
    died: 'Deceduti',
    totalCases: 'Casi totali',
    placeholderValue: 'N/D',
    placeholderValueIncr: ' (+N/D)'
}


export const dataDescription = {
    totalCases: 'I casi totali tengono il conto delle persone che hanno contratto il virus dall\'inizio della pandemia. ' +
        'I nuovi contagi fanno incrementare questo parametro, nessun valore lo fa decrementare',
    newCases: 'I nuovi casi sono i contagi che vengono registrati per la prima volta, in questo grafico vengono mostrati, ' +
        'per ciascun giorno, quanti contagi sono avvenuti.'
}
