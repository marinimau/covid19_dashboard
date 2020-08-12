/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export const appInfo = {
    name: 'Covid19 Dashboard',
    version: '1.0.0 beta',
    author: '@marinimau, @scambuilds'
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
    swab: 'Tamponi',
    info: 'Informazioni'
};


export const chartTitles = {
    lastUpdateDate: 'Dati del ',
    regionsTable: 'Regione',
    totalCasesRegionTable: 'Totale casi',
    incrementTable: 'Variazione',
    totalCasesCurve: 'Andamento casi totali',
    totalCasesRepartion: 'Ripartizione casi totali nel tempo',
    newCasesCurve: 'Andamento contagi giornalieri',
    r0value: 'Valore R0',
    r0Curve: 'Andamento parametro R0',
    currentPositive: 'Positivi Attuali',
    currentPositivePercentage: 'Percentuale positivi',
    positivePercentageDescription: 'Percentuale di pazienti ancora positivi rispetto ai casi totali',
    positiveTrendAbsolute: 'Andamento positivi (totale)',
    positiveTrendVariation: 'Andamento positivi (varizione giornaliera)',
    positiveRepartition: 'Ripartizione attualmente positivi nel tempo',
    recovered: 'Guariti',
    recoveredPercentage: 'Percentuale guariti',
    recoveredPercentageDescription: 'Percentuale pazienti guariti rispetto ai casi totali',
    recoveredTrend: 'Andamento guariti (totale)',
    recoveredTrendDay: 'Andamento guariti (variazione giornaliera)',
    recoveredTrendProportional: 'Andamento guariti (ogni 100 positivi)',
    recoveredRegionTable: 'Totale guariti',
    died: 'Deceduti',
    deathsRatio: 'Mortalità',
    deathRatioDescription: 'Percentuale pazienti deceduti rispetto ai casi totali',
    deathTrend: 'Andamento decessi (totale)',
    deathTrendDay: 'Andamento decessi (variazione giornaliera)',
    deathTrendProportional: 'Andamento decessi (ogni 100 positivi)',
    deathRegionTotal: 'Totale deceduti',
    totalCases: 'Casi totali',
    totalCasesRegion: 'Dati delle singole regioni',
    totalCasesRegionVariation: 'Nuovi contagi',
    swab: 'Tamponi',
    swabRegionTotal: 'Tamponi totali',
    positiveRatioRegions: 'Percentuale positività',
    testedCases: 'Casi testati',
    testedCasesRegionTotal: 'Casi testati totali',
    percetageTestedPositive: 'Percentuale testati positivi',
    positiveByScreening: 'Positivi da screening',
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
    regionHospitalSituation: 'Situazione ospedaliera regioni',


}


export const dataDescription = {
    lastUpdate: '* tutti gli incrementi sono calcolati rispetto al giorno precedente',
    totalCases: 'I casi totali tengono il conto delle persone che hanno contratto il virus dall\'inizio della pandemia. ' +
        'I nuovi contagi fanno incrementare questo parametro, nessun valore lo fa decrementare',
    newCases: 'I nuovi casi sono i contagi che vengono registrati per la prima volta, in questo grafico vengono mostrati, ' +
        'per ciascun giorno, quanti contagi sono avvenuti.',
    r0: 'Il parametro R0 indica il numero medio di persone che ogni positivo contagia a sua volta.',
    screening: 'Percentuale positivi individuati tramite screening, i restanti sono stati individuati per sospetto diagnostico',
    totalCasesRepartition: 'Ripartizione (in percentuale) dei casi totali',
    totalCasesRegion: '',
    recoveredTotal: 'Andamento del valore totale dei guariti nel corso del tempo',
    recoveredVariation: 'Andamento della variazione giornaliera (incremento) dei guariti nel corso del tempo',
    recoveredTrendProportional: 'Andamento della variazione giornaliera (incremento) dei guariti normalizzata sul numero dei ' +
        'positivi correnti. ',
    diedTotal: 'Andamento del valore totale dei decessi nel corso del tempo',
    diedVariation: 'Andamento della variazione giornaliera (incremento) dei decessi nel corso del tempo',
    diedTrendProportional: 'Andamento della variazione giornaliera (incremento) dei decessi normalizzata sul numero dei ' +
        'positivi correnti. ',
    positiveTotal: 'Andamento del valore totale dei positivi attuali nel corso del tempo.',
    positiveVariation: 'Andamento della variazione giornaliera del numero di positivi correnti nel corso del tempo',
    positiveRepartition: 'Ripartizione dei positivi correnti nel corso del tempo in 3 categorie: isolamento domiciliare; '+
        'ricoverati con sintomi (esclusi i ricoverati in terapia intensiva); ricoverati in terapia intensiva.',
    positiveRegionTable: 'Attualmente positivi',
    swapTrend: 'Andamento del valore totale di tamponi eseguiti',
    testedCaseTrend: 'Andamento del valore totale di casi testati (diverso dai tamponi in quanto un singolo individuo' +
        'può essere sottoposto a più tamponi).',
    percentagePositiveTrend: 'Andamento della percentuale di esito positivo sul totale dei casi testati nel corso del tempo'
}


export const infoMenuTitles = {
    sectionLinks: 'Link utili',
    donate: 'Dona',
    contact: 'Contatti',
    repository: 'Repository',
    data: 'Sorgente dati',
}


export const infoMenuDescriptions = {
    donate: 'donazione libera',
    contact: 'ricevi assistenza',
    repository: 'codice sorgente',
    data: 'Protezione Civile IT',
}
