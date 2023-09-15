import react, { useState } from 'react'
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native'
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus'
import { spacing } from './src/utils/sizes'
import { Timer } from './src/features/Timer'
import { FocusHistory } from './src/features/FocusHistory'

// You can import supported modules from npm

export default function App() {
    const [currentSubject, setCurrentSubject] = useState(null)
    const [history, setHistory] = useState([])
    const saveHistory = (subject) => {
        setHistory([...history, subject])
    }
    return (
        <SafeAreaView style={styles.container}>
            {!currentSubject ? (
                <>
                    <Focus addSubject={setCurrentSubject} />
                    <FocusHistory history={history} />
                </>
            ) : (
                <Timer
                    focusSubject={currentSubject}
                    onTimerEnd={saveHistory}
                    clearSubject={() => {
                        setCurrentSubject(null)
                    }}
                />
            )}
            <Text>Hello MAMA</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Platform.OS === 'andriod' ? spacing.lg : 0,
        backgroundColor: colors.darkBlue,
    },
})
