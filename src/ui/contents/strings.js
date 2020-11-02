/**
 * covid19_dashboard copyright © 2020
 * Created by mauromarini on 18/07/2020
 * Repository: http://github.com/marinimau/covid19_dashboard
 * Location: Baratili San Pietro
 */

export const appInfo = {
    name: 'Covid19 Dashboard',
    version: '1.0.0 beta',
    author: '@marinimau, @skambuilds',
    description: 'Covid-19 Italy è una dashboard realizzata dall\'Università degli Studi di Cagliari per il monitoraggio e la visualizzazione dei dati riguardanti la pandemia Covid-19 nel territorio italiano.'
};

export const uiButtons = {
    done: 'Fatto'
}

export const loadingMessages = {
    loading: 'Caricamento...',
    error: 'Qualcosa è andato storto, ricarica la pagina',
    noNotes: 'Nessuna nota in data odierna',
};

export const screenTitles = {
    home: 'Home',
    latestUpdateResume: 'Resoconto',
    newCases: 'Casi Totali',
    recovered: 'Guariti',
    died: 'Deceduti',
    currentPositive: 'Positivi Attuali',
    swab: 'Tamponi',
    info: 'Informazioni'
};


export const chartTitles = {
    locationSelectorPlaceholder: 'Cambia regione...',
    allItaly: 'Tutta Italia',
    lastUpdateDate: 'Dati del ',
    regionsTable: 'Regione',
    totalCasesRegionTable: 'Totale casi',
    incrementTable: 'Variazione',
    totalCasesCurve: 'Andamento casi totali',
    totalCasesRepartionAbsolute: 'Ripartizione casi totali nel tempo (valore assoluto)',
    totalCasesRepartionPercentage: 'Ripartizione casi totali nel tempo (percentuale)',
    newCasesCurve: 'Andamento contagi giornalieri',
    r0value: 'Valore R0',
    r0Curve: 'Andamento parametro R0',
    currentPositive: 'Positivi Attuali',
    currentPositivePercentage: 'Percentuale positivi',
    positivePercentageDescription: 'Percentuale di pazienti ancora positivi rispetto ai casi totali',
    positiveTrendAbsolute: 'Andamento positivi (totale)',
    positiveTrendVariation: 'Andamento positivi (varizione giornaliera)',
    positiveRepartitionAbsolute: 'Ripartizione attualmente positivi nel tempo (valore assoluto)',
    positiveRepartitionPercentage: 'Ripartizione attualmente positivi nel tempo (percentuale)',
    positiveCasesAreaPercentage: 'Percentuale sul totale nazionale',
    criticalTrendAbsolute: 'Andamento terapie intensive',
    recovered: 'Guariti',
    recoveredPercentage: 'Percentuale guariti',
    recoveredPercentageDescription: 'Percentuale pazienti guariti rispetto ai casi totali',
    recoveredTrend: 'Andamento guariti (totale)',
    recoveredTrendDay: 'Andamento guariti (variazione giornaliera)',
    recoveredTrendProportional: 'Andamento guariti (percentuale)',
    recoveredRegionTable: 'Totale guariti',
    died: 'Deceduti',
    deathsRatio: 'Mortalità',
    deathRatioDescription: 'Percentuale pazienti deceduti rispetto ai casi totali',
    deathTrend: 'Andamento decessi (totale)',
    deathTrendDay: 'Andamento decessi (variazione giornaliera)',
    deathTrendProportional: 'Andamento mortalità',
    deathRegionTotal: 'Totale deceduti',
    totalCases: 'Casi totali',
    totalCasesPercentage: 'Percentuale sul totale nazionale',
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
    swabTrendVariation: 'Andamento tamponi (valore giornaliero)',
    testedCaseTrend: 'Andamento casi testati (totale)',
    testedCasesTrendVariation: 'Andamento casi testati (variazione giornaliera)',
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
    totalCasesRepartitionAbsolute: 'Ripartizione (in valore assoluto) dei casi totali',
    totalCasesRepartitionPercentage: 'Ripartizione (in percentuale) dei casi totali',
    totalCasesRegion: '',
    totalCasesPercentage: 'Percentuale dei casi nell\'area selezionata rispetto al totale nazionale',
    recoveredTotal: 'Andamento del valore totale dei guariti nel corso del tempo',
    recoveredVariation: 'Andamento della variazione giornaliera (incremento) dei guariti nel corso del tempo',
    recoveredTrendProportional: 'Andamento della percentuale dei guariti (numero di guariti ogni cento casi)',
    diedTotal: 'Andamento del valore totale dei decessi nel corso del tempo',
    diedVariation: 'Andamento della variazione giornaliera (incremento) dei decessi nel corso del tempo',
    diedTrendProportional: 'Andamento della mortalità (numero di decessi ogni 100 casi)',
    positiveTotal: 'Andamento del valore totale dei positivi attuali nel corso del tempo.',
    positiveVariation: 'Andamento della variazione giornaliera del numero di positivi correnti nel corso del tempo',
    positiveRepartitionAbsolute: 'Ripartizione dei positivi correnti nel corso del tempo in 3 categorie: isolamento domiciliare; '+
        'ricoverati con sintomi (esclusi i ricoverati in terapia intensiva); ricoverati in terapia intensiva (si riporta il valore assoluto).',
    positiveRepartitionPercentage: 'Ripartizione dei positivi correnti nel corso del tempo in 3 categorie: isolamento domiciliare; ricoverati con sintomi (esclusi i ricoverati in terapia intensiva); ricoverati in terapia intensiva (si riporta il valore percentuale).',
    positiveRepartition: 'Ripartizione dei positivi correnti nel corso del tempo in 3 categorie: isolamento domiciliare; '+
        'ricoverati con sintomi (esclusi i ricoverati in terapia intensiva); ricoverati in terapia intensiva (si riportano i valori in percentuale al totale dei positivi).',
    criticalTrendAbsolute: 'Andamento del numero di ricoverati in terapia intensiva',
    positiveRegionTable: 'Attualmente positivi',
    positiveCasesAreaPercentage: 'Percentuale dei positivi attuali nell\'area selezionata rispetto al totale nazionale',
    swapTrend: 'Andamento del valore totale di tamponi eseguiti',
    swabTrendVariation: 'Andamento del numero di tamponi eseguiti nell\'arco giornata',
    testedCaseTrend: 'Andamento del valore totale di casi testati (diverso dai tamponi in quanto un singolo individuo' +
        'può essere sottoposto a più tamponi).',
    testedCasesTrendVariation: 'Andamento del numero di casi testati eseguiti nell\'arco della giornata',
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
