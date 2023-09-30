import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#262626',
    borderColor: '#808080',
    width: '100%',
    paddingVertical: 12,
    paddingStart: 12,
    paddingEnd: 8,
    marginBottom: 8,
  },
  textDescription: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 8,
  },
  textChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  textUnchecked: {
    color: '#F2F2F2',
  },
})