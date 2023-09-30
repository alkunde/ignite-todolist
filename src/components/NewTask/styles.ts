import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    marginTop: -27,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    marginRight: 4,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    color: '#F2F2F2',
  },
  button: {
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  }
})