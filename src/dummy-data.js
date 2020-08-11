export default {
  type: 'folder',
  name: 'Files',
  modified: new Date(),
  size: 234,
  id: 321,
  children: [
    {
      type: 'folder',
      name: 'Documents',
      modified: new Date(),
      size: 223432,
      id: 32122,
      children: [
        {
          type: 'folder',
          name: 'snapshots',
          modified: new Date(),
          size: 7867,
          id: 6754,
        },
        {
          type: 'file',
          name: 'some work.pdf',
          modified: new Date(),
          size: 45,
          id: 4535,
        }
      ]
    },
    {
      type: 'file',
      name: 'Description.txt',
      modified: new Date(),
      size: 23,
      id: 543,
    }
  ]
}