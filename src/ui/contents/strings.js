/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export const appInfo = {
    name: 'Covid19 Dashboard',
    version: '1.0.0 beta',
    author: 'Mauro Marini'
};

export const loadingMessages = {
    loading: 'Caricamento...',
    error: 'Qualcosa è andato storto, ricarica la pagina'
};

export const screenTitles = {
    home: 'Home',
    latestUpdateResume: 'Resoconto',
    newCases: 'Nuovi casi',
    recovered: 'Guariti',
    died: 'Deceduti',
    currentPositive: 'Positivi',
    swab: 'Tamponi'
};


export const chartTitles = {
    lastUpdateDate: 'Dati del ',
    totalCasesCurve: 'Andamento casi totali',
    newCasesCurve: 'Andamento contagi giornalieri',
    r0value: 'Valore R0',
    r0Curve: 'Andamento parametro R0',
    currentPositive: 'Positivi Attuali',
    currentPositivePercentage: 'Percentuale positivi',
    positivePercentageDescription: 'Percentuale di pazienti ancora positivi rispetto ai casi totali',
    positiveTrendAbsolute: 'Andamento positivi (totale)',
    positiveTrendVariation: 'Andamento positivi (varizione giornaliera)',
    recovered: 'Guariti',
    recoveredPercentage: 'Percentuale guariti',
    recoveredPercentageDescription: 'Percentuale pazienti guariti rispetto ai casi totali',
    recoveredTrend: 'Andamento guariti (totale)',
    recoveredTrendDay: 'Andamento guariti (variazione giornaliera)',
    recoveredTrendProportional: 'Andamento guariti (ogni 100 positivi)',
    died: 'Deceduti',
    deathsRatio: 'Mortalità',
    deathRatioDescription: 'Percentuale pazienti deceduti rispetto ai casi totali',
    deathTrend: 'Andamento decessi (totale)',
    deathTrendDay: 'Andamento decessi (variazione giornaliera)',
    deathTrendProportional: 'Andamento decessi (in proporzione ai positivi)',
    totalCases: 'Casi totali',
    swab: 'Tamponi',
    testedCases: 'Casi testati',
    positiveByScreening: 'Individuati con screening',
    swabPositiveRatio: 'Percentuale positivi',
    swabPositiveRatioDescription: 'Percentuale di pazienti positivi rispetto ai casi testati',
    swabTrend: 'Andamento tamponi (totale)',
    testedCaseTrend: 'Andamento casi testati (totale)',
    testedAndPositive: 'Percentuale positivi rispetto ai testati',
    placeholderValue: 'N/D',
    placeholderValueIncr: ' (+N/D)',
    positiveHomeQuarantine: 'Isolamento domiciliare',
    hospitalizedWithSymptoms: 'Ricoverati con sintomi',
    critical: 'Terapia intensiva',

}


export const dataDescription = {
    lastUpdate: '* tutti gli incrementi sono calcolati rispetto al giorno precedente',
    totalCases: 'I casi totali tengono il conto delle persone che hanno contratto il virus dall\'inizio della pandemia. ' +
        'I nuovi contagi fanno incrementare questo parametro, nessun valore lo fa decrementare',
    newCases: 'I nuovi casi sono i contagi che vengono registrati per la prima volta, in questo grafico vengono mostrati, ' +
        'per ciascun giorno, quanti contagi sono avvenuti.',
    r0: 'Il parametro R0 indica il numero medio di persone che ogni positivo contagia a sua volta.',
    screening: 'Percentuale positivi individuati tramite screening, i restanti sono stati individuati per sospetto diagnostico'

}
